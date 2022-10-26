import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/core";

export default function App() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const loadData = () =>
    fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&facet=host_response_rate&facet=host_verifications&facet=city&facet=property_type&facet=cancellation_policy&facet=features"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.records);
      });
  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.main}>
        {/* <Text>rif</Text> */}
        <ScrollView>
          <StatusBar style="auto" />
          {data.map((item, i) => (
            <Card
              key={i}
              item={item}

              //   onPress={() => navigation.push("Detail")}
            />
          ))}
        </ScrollView>
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // alignSelf: "flex-start",
    // width: "95%",
    marginTop: 40,
    // borderWidth: 1,
    borderColor: "red",
  },
  main: {
    flex: 11,
  },
});