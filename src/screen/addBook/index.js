import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "./style";

export const AddBookScreen = ({ route }) => {
  const [title, onChangeTitle] = React.useState(null);
  const [Desc, onChangeDesc] = React.useState(null);
  const [image, onChangeImage] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);

  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New Book</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Enter Book Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDesc}
        value={Desc}
        placeholder="Enter Book Description"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeImage}
        value={image}
        placeholder="Enter Book Image"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDate}
        value={date}
        placeholder="Enter Book Date"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          goBack();
          route.params.addBook({
            volumeInfo: {
              title: title,

              publishedDate: date,
              description: Desc,

              imageLinks: {
                thumbnail: image,
              },
            },
          });
        }}
      >
        <Text style={styles.textBtn}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
