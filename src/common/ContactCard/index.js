import { TouchableOpacity, View } from "react-native";
import React, { useEffect, useCallback } from "react";
import { Text } from "react-native-ui-lib";
import { updateContactsList } from "@actions/ContactList";
import { connect } from "react-redux";
import moment from "moment";
import * as SMS from "expo-sms";
import { styles } from "./styles";
import Row from "@common/Row";
import { logEvent } from "@utils/helper";

const ContactCard = ({ item, index, contactList, updateContactsList }) => {
  const now = moment(new Date());
  const [smsAvailable, setSmsAvailable] = React.useState(false);

  useEffect(() => {
    updateContactVal();
  }, [item]);

  useEffect(() => {
    SMS.isAvailableAsync().then(setSmsAvailable);
  }, []);

  const updateContactVal = useCallback(() => {
    item.invitedTime = now.diff(item.activeTime, "seconds");
    if (item?.invitedTime > 86400) {
      item.isActive = false;
      item.invitedTime = null;
    }
    const updateContact = [...contactList];
    updateContactsList(updateContact);
  });

  const initials = item?.name
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("")
    .toUpperCase();

  const handleInvite = useCallback(async () => {
    logEvent("Social - Invite Friend");
    if (smsAvailable) {
      const number =
        item?.phoneNumbers[0].number ?? item?.phoneNumbers[0].digits;
      const url = `Hey ${item?.name}, join me on Weekend! Weekend lets us find groups for IRL activities, and discover local communities. Here's the app link: https://weekend.network/get-app`;
      const { result } = await SMS.sendSMSAsync(number, url);

      if (result === "cancelled") {
        return null;
      }

      if (result === "sent" || result === "unknown") {
        item.activeTime = moment(new Date());
        item.isActive = true;
        contactList[index] = item;
        const updateContact = [...contactList];
        updateContactsList(updateContact);
      }
    }
  }, [smsAvailable]);

  const handleAddFriend = () => {
    alert("Please wait 24h to invite again!");
  };

  return (
    <Row
      style={[
        styles.contactCardContainer,
        {
          borderTopLeftRadius: index === 0 ? 12 : 0,
          borderTopRightRadius: index === 0 ? 12 : 0,
        },
      ]}
    >
      <View style={styles.initialContainer}>
        <Text hm14 textDark2>
          {initials}
        </Text>
      </View>
      <Text h14 textDark0 style={styles.nameText}>
        {item?.name}
      </Text>

      {item.isActive ? (
        <TouchableOpacity onPress={handleAddFriend}>
          <View style={styles.buttonContainer}>
            <Text h12 green>
              Invite sent!
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleInvite}>
          <View style={styles.buttonContainer}>
            <Text h12 green>
              Invite
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </Row>
  );
};

const mapStateToProps = (state) => ({
  contactList: state.contactListReducer.contactList,
});

export default connect(mapStateToProps, {
  updateContactsList,
})(ContactCard);
