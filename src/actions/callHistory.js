import firestore from "@react-native-firebase/firestore";

const setCalleeName = async({userID, userName}) => {

    try{

        const res = await firestore().collection('CalleeData').doc(userID).set({ uid : userID, userName : userName});

    }catch(err){

        console.log('error',err);
    }
}



const func_onOutgoingCallCancelButtonPressed = async({data}) => {
    
    const user = await firestore().collection('CalleeData').doc(data.callee_ID).get();
    console.log('callee data : ',user.data().userName);
    data['callee_name'] = user.data().userName;
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% INSIDE onOutgoingCallCancelButtonPressed FUNCTION ',data,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    const res = await firestore().collection('callHistory').add(data);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% CALL RECORD ADDED SUCCESSFULYY ',res,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
}


const func_onOutgoingCallAccepted = async({data}) => {
    
    const user = await firestore().collection('CalleeData').doc(data.callee_ID).get();
    console.log('callee data : ',user.data().userName);
    data['callee_name'] = user.data().userName;
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% INSIDE onOutgoingCallAccepted FUNCTION ',data,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    const res = await firestore().collection('callHistory').add(data);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% CALL RECORD ADDED SUCCESSFULYY ',res,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
}

const func_onOutgoingCallTimeout = async({data}) => {
    
    const user = await firestore().collection('CalleeData').doc(data.callee_ID).get();
    console.log('callee data : ',user.data().userName);
    data['callee_name'] = user.data().userName;
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% INSIDE onOutgoingCallTimeout FUNCTION ',data,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    const res = await firestore().collection('callHistory').add(data);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% CALL RECORD ADDED SUCCESSFULYY ',res,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

}

const func_onOutgoingCallDeclined = async({data}) => {
   
    const user = await firestore().collection('CalleeData').doc(data.callee_ID).get();
    console.log('callee data : ',user.data().userName);
    data['callee_name'] = user.data().userName;
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% INSIDE onOutgoingCallDeclined FUNCTION ',data,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    const res = await firestore().collection('callHistory').add(data);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% CALL RECORD ADDED SUCCESSFULYY ',res,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
}

export const onOutgoingCallCancelButtonPressedHelper = (data) => dispatch => {

    func_onOutgoingCallCancelButtonPressed({data});

}

export const onOutgoingCallAcceptedHelper = (data) => dispatch => {

    func_onOutgoingCallAccepted({data});

}

export const onOutgoingCallTimeoutHelper = (data) => dispatch => {

    func_onOutgoingCallTimeout({data});

}

export const onOutgoingCallDeclinedHelper = (data) => dispatch => {

    func_onOutgoingCallDeclined({data});

}


export const setCalleeNameHelper = (userID, userName) => dispatch => {
    setCalleeName({userID, userName});
}