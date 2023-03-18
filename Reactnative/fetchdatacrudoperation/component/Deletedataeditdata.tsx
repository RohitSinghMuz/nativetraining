import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';



interface Istate {
  data: [];
  email: string;
  first_name: string;
  last_name: string;
}

 class Deletedataeditdata extends Component {
  state: Istate = {
    data: [],
    email: '',
    first_name: '',
    last_name: '',
  };

  // map data
  getData = async () => {
    try {
      const getApi = await axios.get('https://reqres.in/api/users?page=2');
      console.log(getApi);
      const data = getApi.data.data;
      console.log(data, ' data s storing');
      this.setState({data: data});
    } catch (e) {
      console.log(e);
    }
  };
  //edit button

  editButton = (obj: any) => {
    console.log(obj, 'editData');
    const data = obj;
    console.log(data);

    this.setState({
      email: obj.email,
      first_name: obj.first_name,
      last_name: obj.last_name,
    });
  };

  // editdata=()=>{
  //   this.setState({
  //     email: obj.email,
  //     first_name: obj.first_name,
  //     last_name: obj.last_name,
  //   });
  // }
  // delete
  deleteData = async (id: any) => {
    console.log(id);
    const DeleteApi = await axios.delete(`https://reqres.in/api/users/${id}`);
    console.log('status:', DeleteApi.status);
    console.log(DeleteApi, 'api data');

    if (DeleteApi.status === 204) {
      this.setState({data: this.state.data.filter((item: any) => item.id !== id)});
    }

    console.log(this.state.data);
  };
  componentDidMount() {
    this.getData();
  }

  render() {
   
    return (
      <View>
        <ScrollView>
          <Text style={{textAlign:'center'}}>Edit Delete</Text>

        
          <TextInput
           placeholder='First Name'
            style={styles.input}
            value={this.state.first_name}
            onChangeText={(firstnametext) => this.setState({first_name: firstnametext})}
          />
          <TextInput
          placeholder='Last Name'
          style={styles.input}
            value={this.state.last_name}
            onChange={(lastnametext) => this.setState({last_name: lastnametext})}
          />
            <TextInput
                placeholder='Email'
            style={styles.input}
            value={this.state.email}
            onChangeText={(maildata) => this.setState({email: maildata})}
          />

{/* onPress={this.editdata} */}
          <TouchableOpacity style={styles.btn} >
            <Text  style={styles.textdata}> UpdateData</Text>
          </TouchableOpacity>

       
     

          <FlatList
            data={this.state.data}
            renderItem={({item}: any) => {
              return (
                <View
                style={styles.cardata}>
                  <Text  style={styles.textdata}>{item.email}</Text>
                  <Text style={styles.textdata}>
                    {item.first_name}
                  </Text>
                  <Text style={styles.textdata}>
                    {item.last_name}
                  </Text>
                  <TouchableOpacity>
                    <Text onPress={() => this.deleteData(item.id)} style={styles.btndelete}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text onPress={() => this.editButton(item)} style={styles.btn2}> Edit</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Deletedataeditdata;

const styles = StyleSheet.create({
  LoginHeading: {
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 20,
  },
  btndelete:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
    marginHorizontal: 100,
    textAlign: 'center',
    marginVertical:10,
    fontSize:22,
  },
  btn2: {
    fontSize:22,
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginHorizontal: 100,
    textAlign: 'center',
  },
  textdata: {
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    width: 200,
marginHorizontal:70,
    color: 'black',
  },
  bgimage: {
    width: '100%',
    height: '100%',
    // zIndex:-3,
  },
  cardata:{
    margin: 12,
    borderWidth: 2,
    textAlign:'center',
    
  },
  btn: {
 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:100,
    textAlign:'center',
    marginVertical:30,
  },
});
