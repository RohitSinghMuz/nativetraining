import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface IProps {}
interface IState {
  data: {
    text: string;
  }[];
  iseditdata?: number | null;
  text: any;
}
class Todolist extends Component<IProps, IState> {
  state = {
    text: '',
    data: [],
    iseditdata: undefined,
  };

  addTodoText = async() => {
    let arr = {
      text: this.state.text,
    };
    this.setState({
      data: [...this.state.data, arr],
      text: '',
    });
    await AsyncStorage.setItem('tododata',JSON.stringify(this.state.data))

  };

  getdata=async()=>{
  const getnewdata:any=await AsyncStorage.getItem('tododata')
const mydata= await  getnewdata?JSON.parse(getnewdata):[];
console.log(mydata,'mydata')
  }

  deletetext = (idx: any) => {
    const deleteitem = this.state.data?.filter(
      (todo: any, i: any) => i != idx,
    );
    this.setState({
      data: deleteitem,
    });
  };

  Edititem = (obj: any, idx: any) => {
    this.setState({
      iseditdata: idx,
      text: obj.text,
    });
  };
  Editvalue = () => {
    const temp: any = [...this.state.data];
    temp[Number(this.state.iseditdata)].text = this.state.text;
    this.setState({
      text: '',
    });
  };

  render() {
    return (
  
   
     
        <ScrollView >
          <View>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <TextInput
              style={styles.input}
              onChangeText={(textdata: any) => this.setState({text: textdata})}
              value={this.state.text}
              placeholder="Enter Text"
            />

            <TouchableOpacity style={styles.button} onPress={this.addTodoText}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.getdata}>
              <Text style={styles.buttonText}>retreive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.Editvalue}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <FlatList
              data={this.state.data}
                keyExtractor={(item: any,index:number) =>  index.toString() }
            renderItem={({item,index}:any) =>(
         
                <View style={styles.Outputview}>
                  <Text style={styles.Textoutput}>{item.text}</Text>
                  <Text>
                    <TouchableOpacity onPress={() => this.Edititem(item, index)}
                     >
                      <Text style={styles.Textoutput}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.deletetext(index)} >
                      <Text style={styles.Textoutput}>DELETE</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
    )}
            />
            {/* {this.state.data?.map((item: any, index: Number) => {
            return (
              <View style={styles.Outputview} >
          
                <Text style={styles.Textoutput}>{item.text}</Text>
                <Text >
                <TouchableOpacity onPress={() => this.Edititem(item, index)}>
                  <Text style={styles.Textoutput}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deletetext(index)}>
                  <Text style={styles.Textoutput}>DELETE</Text>
                </TouchableOpacity>
                </Text>
              </View>
            );
          })} */}
          </View>
        </ScrollView>
      

     
    );
  }
}

export default Todolist;

const styles = StyleSheet.create({
  Outputview: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  Textoutput: {
    fontSize: 25,
    color: 'LightGray',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    margin: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
