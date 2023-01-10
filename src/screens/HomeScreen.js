import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'

const HomeScreen = () => {
  return (
    <SafeAreaView 
    style={{
        flex: 1, 
        paddingHorizontal: 20, 
        backgroundColor: COLORS.white,
        }}>
      <View style={style.header}>
        <View>
            <Text>Welcome To</Text>
            <Text>The Shop</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default HomeScreen;