 import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../client/Onboarding';
import NewsScreen from '../client/NewsScreen';
import LegalGPTScreen from '../client/LegalGPTScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeSelected from '../../assets/tab-home-selected.png'
import HomeUnSelected from '../../assets/tab-home-unselected.png'
import NewsUnSelected from '../../assets/news-icon-unselected.png'
import NewsSelected from '../../assets/news-icon-selected.png'
import CallUnselected from '../../assets/CallUnselected.png'
import CallSelected from '../../assets/CallSelected.png'
import ProfileUnSelected from '../../assets/profile-icon-unselected.png'
import ProfileSelected from '../../assets/profile-icon-selected.png'
import LinearGradient from 'react-native-linear-gradient'
import RegisterSplashScreen from '../AuthFlow/RegisterSplashScreen';
import SignupLawyerScreen from '../AuthFlow/SignupLawyerScreen';
import AuthFlow from '../AuthFlow/AuthFlow';
import styles from '../../styles';
import MessageScreen from '../client/MessageScreen';
import ProfileScreen from '../client/ProfileScreen';
import { ZegoCallInvitationDialog } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import ChatWindow from '../client/MessageScreen/ChatWindow';
import ContactList from '../client/Onboarding/ContactList';
import ExpandedNewsScreen from '../ExpandedNewsScreen';
import SignupLawyer from '../AuthFlow/SignupLawyer';
import CustomDrawer from '../../components/CustonDrawer';
import NewsDetail from '../client/NewsScreen/NewsDetail';
import EditProfile from '../client/ProfileScreen/EditProfile';
import InitialLandingScreen from './InitialLandingScreen';
import EditServices from '../client/ProfileScreen/EditServices';
import SearchResultScreen from '../client/SearchScreen';
import CallScreen from '../client/CallScreen';
import {ZegoUIKitPrebuiltCallWaitingScreen,
  ZegoUIKitPrebuiltCallInCallScreen,} from '@zegocloud/zego-uikit-prebuilt-call-rn';
const Root = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const News = createNativeStackNavigator();
const NewsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Client App flow

function ClientTabNavigator  () {

  return(
    <Tab.Navigator 
      initialRouteName='NewsFlow'
      screenOptions={
        {
          headerShown: false,
          tabBarLabel: "",
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
            // backgroundColor: '#8940FF',
            borderTopWidth: 0,
            position:'absolute'
          },
          tabBarBackground: () => (
            <View style={{ flex: 1 }}>
              <LinearGradient
                // start={{ x: 0, y: 0 }}
                // end={{ x: 1, y: 0 }}
                colors={['#8940FF', '#5B10D6']}
                style={{ flex:1 }}
              />
            </View>
          ),
          tabBarIcon: ({focused}) =>{
            return(
              focused ? (<Image 
                source={HomeSelected} 
                style={[styles.iconFocus,{marginTop: 10}]}
                />) : (
                <Image 
                  source={HomeUnSelected} 
                  style={styles.iconUnFocus} 
                />)
              
            )
          }
        }
      }
    >
      <Tab.Screen
        component={NewsFlow} 
        name="News"
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              // backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={HomeSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={HomeUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
        
      />
      <Tab.Screen 
        component={NewsNavigator} 
        name="NewsScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              // backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={NewsSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={NewsUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
      <Tab.Screen 
        component={ContactList} 
        name="ContactList" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              // backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={CallSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={CallUnselected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
      <Tab.Screen 
        component={ProfileNavigator} 
        name="ProfileScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              // backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={ProfileSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={ProfileUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
    </Tab.Navigator>
  )

}


function NewsNavigator () {
  return (

    <NewsStack.Navigator screenOptions={{headerShown:false}}>
      <NewsStack.Screen component={NewsScreen} name='NewsScreen'/>
      <NewsStack.Screen component={NewsDetail} name='NewsDetail'/>
    </NewsStack.Navigator>

  )
}

function ProfileNavigator () {

  return(
  <ProfileStack.Navigator screenOptions={{headerShown:false}}>
    <ProfileStack.Screen component={ProfileScreen} name='ProfileScreen' />
    <ProfileStack.Screen component={EditProfile} name='EditProfile' />
    <ProfileStack.Screen component={EditServices} name='EditServices' />
  </ProfileStack.Navigator>
  )
  
}

function UpdateProfile () {

  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen component={EditProfile} name='EditProfile' />
      <Stack.Screen component={EditServices} name='EditServices' />
    </Stack.Navigator>
  )
}

function CallStack () {

  return(
    <Stack.Navigator>
      <Stack.Screen
      options={{ headerShown: false }}
      // DO NOT change the name 
      name="ZegoUIKitPrebuiltCallWaitingScreen"
      component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <Stack.Screen
          options={{ headerShown: false }}
          // DO NOT change the name
          name="ZegoUIKitPrebuiltCallInCallScreen"
          component={ZegoUIKitPrebuiltCallInCallScreen}
      />
    </Stack.Navigator>
  )
}

function ClientFlow(){
  
  return(
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/> } screenOptions={{
      drawerStyle: {
        width: 250,
      },
    }}>
     <Drawer.Screen 
        component={ClientTabNavigator} name="Home" options={{headerShown:false}} />
        <Drawer.Screen component={LegalGPTScreen} name='Legal GPT' options={{headerShown:false}}/>
        <Drawer.Screen component={NewsScreen} name="News" options={{headerShown:false}}/>
        <Drawer.Screen component={UpdateProfile} name='Account' options={{headerShown:false}} />
        <Drawer.Screen component={ChatWindow} name='ChatWindow' options={{headerShown:false}}/>
        <Drawer.Screen component={SearchResultScreen} name='SearchResultScreen' options={{headerShown: false}} />
        <Drawer.Screen component={AppFlow} name='AppFlow' />
        <Drawer.Screen component={CallScreen} name='CallScreen' options={{headerShown: false}}/>
        {/* <Drawer.Screen component={CallStack} name='CallStack' /> */}
    </Drawer.Navigator>
    
  )
}



function NewsFlow(){
  return(
    <News.Navigator initialRouteName='OnboardingSnippet' screenOptions={{headerShown: false}}>
      <News.Screen component={Onboarding} name="OnboardingSnippet" />
      
      <News.Screen component={NewsScreen} name="NewsScreen" />
      <News.Screen component={ContactList} name="ContactList" />
      <News.Screen
      options={{ headerShown: false }}
      // DO NOT change the name 
      name="ZegoUIKitPrebuiltCallWaitingScreen"
      component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <News.Screen
          options={{ headerShown: false }}
          // DO NOT change the name
          name="ZegoUIKitPrebuiltCallInCallScreen"
          component={ZegoUIKitPrebuiltCallInCallScreen}
      />  
      <News.Screen component={MessageScreen}
      name='MessageScreen' />
      
      <News.Screen component={NewsDetail} name='NewsDetail' />
    </News.Navigator>
)}


function SignupFlow  ()  {

  return(

    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen component={AuthFlow} name="Auth" />      
      {/* <Stack.Screen component={SignupCilentScreen} name="SignupUser"/> */}
      <Stack.Screen component={SignupLawyerScreen} name="SignupUser"/>
      <Stack.Screen component={SignupLawyer} name="SignupLawyer"/>
      {/* <Stack.Screen component={RegisterSplashScreen} name='RegisterSpashScreen' /> */}
      <Stack.Screen component={ClientFlow} name= "ClientFlow" />
      
    </Stack.Navigator>
  )

 
}

function AppFlow () {

  return (
    <AppStack.Navigator screenOptions={{headerShown:false}}>
      <AppStack.Screen  component={InitialLandingScreen} name='InitialLandingScreen'/>
      <AppStack.Screen component={SignupFlow} name='SignupFlow' />
      <AppStack.Screen component={ClientFlow} name='ClientFlow' />
      {/* <AppStack.Screen
      options={{ headerShown: false }}
      // DO NOT change the name 
      name="ZegoUIKitPrebuiltCallWaitingScreen"
      component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <AppStack.Screen
          options={{ headerShown: false }}
          // DO NOT change the name
          name="ZegoUIKitPrebuiltCallInCallScreen"
          component={ZegoUIKitPrebuiltCallInCallScreen}
      />        */}
    </AppStack.Navigator>
  )
}

function Base() {

 
    return (
       <NavigationContainer screenOptions={{headerShown:false}}>
        <ZegoCallInvitationDialog />
         <Root.Navigator screenOptions={{ headerShown: false }}>
         <Root.Screen component={AppFlow} name="AppFlow" />
        {/* <Root.Screen component={ExpandedNewsScreen} name="ExpandedNewsScreen" /> */}       
        {/* <Root.Screen
      options={{ headerShown: false }}
      // DO NOT change the name 
      name="ZegoUIKitPrebuiltCallWaitingScreen"
      component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <Root.Screen
          options={{ headerShown: false }}
          // DO NOT change the name
          name="ZegoUIKitPrebuiltCallInCallScreen"
          component={ZegoUIKitPrebuiltCallInCallScreen}
      />        */}
         </Root.Navigator>
       </NavigationContainer>
    );
   }

export default Base