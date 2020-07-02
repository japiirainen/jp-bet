// function CurrentUserIDSubscription() {
//     const setCurrentUserID = useSetRecoilState(currentUserIDState);

//     useEffect(() => {
//       RemoteStateAPI.subscribeToCurrentUserID(setCurrentUserID);
//       // Specify how to cleanup after this effect
//       return function cleanup() {
//         RemoteServerAPI.unsubscribeFromCurrentUserID(setCurrentUserID);
//       };
//     }, []);

//     return null;
//   }

//   function MyApp() {
//     return (
//       <RecoilRoot>
//         <CurrentUserIDSubscription />
//         <CurrentUserInfo />
//       </RecoilRoot>
//     );
//   }
