import React, { MouseEvent } from 'react';
import { Card, Text, Icon, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

export interface PostProps {
  imgUrl: string;
  bookName: string;
  bookAuthor: string;
  bookOwnerName: string;
  isInterested: boolean;
  topMargin?: boolean;
  reqOnGoing: boolean;
  onPostButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isOwners: boolean;
  validTill: string;
  onEditButtonClick?: () => void;
  onAvailableButtonClick?: () => void;
  onDeleteButtonClick?: () => void;
  availableTenMoreDaysReqOnGoing?: boolean;
  availableTenMoreDaysSuccessMsg?: string | null;
  availableTenMoreDaysErr?: { message: string; status: number } | null;
}

const { Image } = Card;
export const Post = ({
  imgUrl,
  bookName,
  bookAuthor,
  bookOwnerName,
  isInterested,
}: PostProps) => {
  return (
    <Card>
      <Text>{bookOwnerName}</Text>
      <Image
        style={{ padding: 0 }}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.bottomContainer}>
        <View>
          <Text>{bookName}</Text>
          <Text>{bookAuthor}</Text>
        </View>
        <Button
          raised
          icon={{
            name: 'heart',
            type: 'antdesign',
            size: 25,
            color: isInterested ? 'red' : 'white',
          }}
          buttonStyle={styles.button}
          containerStyle={{ borderRadius: 50 }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    // height: '50%',
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#eee',
    padding: 0,
    margin: 0,
  },
});
