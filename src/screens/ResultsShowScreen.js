import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
          //   style={{ alignSelf: "center" }}
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
        <View style={styles.address}>
          <Text style={styles.addressText}>{result.location.address1}</Text>
          <Text style={styles.addressText}>
            {result.location.city}, {result.location.state}
          </Text>
          <Text style={styles.addressText}>{result.location.zip_code}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // borderWidth: 2,
    // borderColor: "red",
    alignItems: "center",
    // justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    height: 150,
    width: 250,
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  address: {
    marginTop: 20,
  },
  addressText: {
    fontSize: 20,
  },
});

export default ResultsShowScreen;
