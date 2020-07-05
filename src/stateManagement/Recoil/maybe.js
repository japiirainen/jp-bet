// function UserInfo({userID}) {
//     const [userNameLoadable, setUserName] = useRecoilStateLoadable(userNameQuery(userID));
//     switch (userNameLoadable.state) {
//       case 'hasValue':
//         return <div>{userNameLoadable.contents}</div>;
//       case 'loading':
//         return <div>Loading...</div>;
//       case 'hasError':
//         throw userNameLoadable.contents;
//     }
//   }
