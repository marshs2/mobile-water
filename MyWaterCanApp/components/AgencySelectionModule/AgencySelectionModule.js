import React, { Component } from 'react';
import {colors,fontWeight} from '../../constants/helpers';
import {Platform,Image, StyleSheet, TouchableOpacity,Text, View,AsyncStorage,FlatList,AppState,SectionList} from 'react-native';
import { connect } from 'react-redux';
import {screens} from '../../constants/constants'
import { SearchBar, Button } from 'react-native-elements'
import { fetchAgencyList,setViewAgencyList } from '../../actions/Actions';


class AgencySelectionModule extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: "",
  };
  }
  componentDidMount(){
    this.props.getAgencyList(13.1079909,80.2432857)
  }
  
  NavigationButtonHandler = () => {

    this.props.navigator.showModal({
      screen: screens.USERLOCATION, // unique ID registered with Navigation.registerScreen
      title: 'User Location', // title of the screen as appears in the nav bar (optional)
      animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    }); 
  }
  separator() {
    return (
        <View style = {{backgroundColor: colors.separator, height: 1,width:'100%'}}/>
    )
  }
  agencyCell(item) {
    return (
    <View style = {styles.AgencyOutterBox} >
          <View style = {styles.jobContainer}>
            <Text style = {styles.jobTitle}>{item.agency_name}(A711)</Text>
            <Text style = {styles.jobStatus}>Status: Assigned</Text>
            <Text style = {styles.jobStatus}>Status: Assigned</Text>
            <Text style = {styles.jobStatus}>Status: Assigned</Text>
          </View>
        </View>
    )
  }
  sectionCell() {
    return (
      <View style = {styles.sectionContainer}>
      <Button title = "cost" style = {styles.button}></Button>
      <Button title = "distance" style = {styles.button}>distance</Button>
      </View>
    )
  }
  handleQueryChange = query => {
   this.props.setViewAgencyList(query)
    // this.setState(state => ({ ...state, query: query || "" }))
  }
  handleSearchCancel = () => this.handleQueryChange("");
  handleSearchClear = () => this.handleQueryChange("");
        
  render() {
    return (
    <View style =  {styles.container}>
      <SearchBar
        round
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={this.handleQueryChange}
        onCancel={this.handleSearchCancel}
        onClear={this.handleSearchClear}
        placeholder='Type Here...' />
      <View style = {styles.iamfeelinglucky}>
      <Text style = {styles.iamfeelingluckytext}>Iam Feeling lucky</Text>
      </View>
         <SectionList sections = {this.props.tempAgencies} showsVerticalScrollIndicator={false} 
          renderSectionHeader={ ({section}) => 
            this.sectionCell()
          }
          renderItem={ ({item}) => 
            this.agencyCell(item)
          }
          keyExtractor={ (item, index) => index }
          />
     </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setViewAgencyList:(query)=> dispatch(setViewAgencyList(query)),
    getAgencyList: (lat, lng) => dispatch(fetchAgencyList(lat, lng))
  };
};
function mapStateToProps(state) {
  return {
    agencies: [{ title: "user name", data:state.agencyList.data}],
    tempAgencies: [{ title: "user name", data:state.viewAgenceyList.data}]
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AgencySelectionModule);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    height: '100%',
    width: '100%'
  },
  button: {
    // backgroundColor: 'gray',
    // borderRadius: 5,
    // padding: 10,
    // marginBottom: 10,
    // marginTop:2,
    // shadowColor: '#303838',
    // shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 3,
    // shadowOpacity: 0.35,
    height: 40,
    width: 100,
    // color: 'white'

},
  sectionContainer: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    flexDirection: 'row'
   },
  searchContainer: {
    height: 70,
    width: '100%',
    backgroundColor: 'red'
  },
  iamfeelinglucky: {
    height: 50,
    width: '100%',
    backgroundColor: 'white'
  },

  iamfeelingluckytext: {
    fontSize: 22,
    fontWeight:  "bold",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.34)',
    justifyContent: 'space-around',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  AgencyOutterBox: {
    backgroundColor: 'white',
    margin:12,
    borderRadius:3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowColor: 'black'
  },
  jobOuterPaddingBox: {
    backgroundColor: '#f8f9f9'
  },
  jobTitle: {
    fontSize: 20,
    fontWeight:  "bold",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8
  },
  jobStatus: {
    fontSize: 14,
    fontWeight: fontWeight.Semibold,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  jobAddressContainer: {
    flexDirection: 'row'
  },
  jobTimeContainer: {
    flexDirection: 'row'
  },
  jobAddress: {
    width: '82%'
  },
  jobAddressPoint: {
    alignItems: 'center',
    width: '18%'
  },
  jobTime: {
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobAddressText: {
    fontSize: 14,
    fontWeight: fontWeight.Regular,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 14,
    marginBottom: 14
  },
  viewDetailsText: {
    fontSize: 14,
    fontWeight: fontWeight.Semibold,
    color: colors.nccBlue,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16
  },
  timeImage: {
    width: 24,
    height: 24
  },
  blueCircularView:{
    backgroundColor: colors.nccBlue,
    width:8,
    height:8,
    borderRadius: 4,
    marginTop: 20
  },
  blackLine:{
    flex: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    width: 1
  },
  blackCircularView:{
    backgroundColor: 'black',
    width:8,
    height:8,
    borderRadius: 4,
    marginBottom: 20
  }
});
