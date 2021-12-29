import * as React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

export const BookItem = ({ book }) => {
  const { volumeInfo } = book;
  const { title, description, publishedDate, imageLinks } = volumeInfo;
  console.log(imageLinks);
  return (
    <View style={styles.card}>
      <Image
        resizeMode="contain"
        style={styles.cardImage}
        source={{ uri: imageLinks?.thumbnail }}
      />

      <Text style={styles.cardText}>{title}</Text>
      <Text style={styles.cardText}>{publishedDate}</Text>
      <Text allowFontScaling style={styles.descText}>
        {description}
      </Text>
    </View>
  );
};
