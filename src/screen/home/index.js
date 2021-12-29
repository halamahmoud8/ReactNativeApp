import React, { useEffect } from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { BookItem } from "../../components/bookItem";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export const HomeScreen = () => {
  const [books, setBooks] = React.useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxR"
      )
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch(function (error) {});
  }, []);

  const addBook = (value) => {
    setBooks([...books, value]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return <BookItem book={item} key={item.id} />;
        }}
      ></FlatList>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("addBook", { addBook });
        }}
      >
        <Text style={styles.textBtn}>Add Book</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
