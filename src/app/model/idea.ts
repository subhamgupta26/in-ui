
export interface idea {
  _id: string,
  "userId": string,
  "title": string,
  "desc": string,
  "entitytype":number,
  "userDomainSkills": Array<number>,
  "userTechSkills": Array<number>,
  "likes": Array<String>,
  "commentList": Array<Object>,
  "entityCreatedTime": string,
  "projectStatus": string,
  "rewardPointsPerPerson": string,
  "projectStartDate": string,
  "projectEndDate": string,
  "appliedMemberCount": string,
  "selectedMemberCount": string,
  "reqMemberCount": string,
  "likesCount": string
}
