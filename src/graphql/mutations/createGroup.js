import gql from 'graphql-tag';

const CREATE_GROUP_MUTATION = gql`
  mutation CreateGroup(
    $welcomeText: String!
    $description: String!
    $token: String!
    $members: [{  
      memberName: String!
      mediaUrl: String!
      month: String!
      year: String!
      phoneNumber: String!
      familyStatus: GENERATION_TYPE
    }]!
    $grandChildren: [{  
      memberName: String!
      mediaUrl: String!
      month: String!
      year: String!
      phoneNumber: String!
      familyStatus: GENERATION_TYPE
    }]!
    
  ) {
    createGroup(
      data: {
        welcomeText: $contentType
        description: $description
      }
      members: $members.forEach(member=> {return {connect: {
        name: member.memberName
        picture: member.mediaUrl
        monthOfBirth: member.month
        yearOfBirth: member.year
        contactNumber: member.phoneNumber
        generation: member.familyStatus
      }}})

      grandChildren: $grandChildren.forEach(member=> {return {connect: {
        name: member.memberName
        picture: member.mediaUrl
        monthOfBirth: member.month
        yearOfBirth: member.year
        contactNumber: member.phoneNumber
        generation: member.familyStatus

      }}})
      token: $token
    ) 
    {
      id
    }
  }
`;

export default CREATE_GROUP_MUTATION;
