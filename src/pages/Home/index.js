import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Action from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'MCDonald',
    value: '300.00',
    date: '17/20/2022',
    type: 0 //expense
  },
  {
    id:2,
    label: 'Renda',
    value: '700.00',
    date: '17/20/2022',
    type: 1 //incomes
  },
  {
    id:3,
    label: 'luz',
    value: '200.00',
    date: '17/20/2022',
    type: 1 //incomes
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vítor Conceição" />   
      <Balance balance="4.560.20" expenses="-340.00" />
      <Action/>
      <Text style={styles.title}>Last movements</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item)=> String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
