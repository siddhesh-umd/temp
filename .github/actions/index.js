import { Octokit } from "@octokit/core";

console.log('1. Loaded index.js! 🎁');

const GITHUB_UMD_ACCOUNT_FINE_GRAIN_WITH_ALL_PERMISSIONS = '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';
const GITHUB_UMD_ACCOUNT_CLASSIC_TOKEN_WITH_ALL_PERMISSIONS = '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'; // created cause above not working for POST

async function commentOnPullRequest() {
    console.log('3. Inside async - start! 🎁');
    const octokit = new Octokit();

//DOES work:
  const { data } = await octokit.request('GET /repos/siddhesh-umd/temp/issues', {
    owner: 'siddhesh-umd',
    repo: 'temp',
    headers: {
      authorization: `${GITHUB_UMD_ACCOUNT_CLASSIC_TOKEN_WITH_ALL_PERMISSIONS}`,  
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });    
  console.log('RESPONSE ', data);

  // //does NOT work:
    // const response = await octokit.request('POST /repos/siddhesh-umd/temp/issues/1/comments', {
    //     owner: 'siddhesh-umd',
    //     repo: 'temp',
    //     issue_number: '1',
    //     body: 'Comment coming from from workflow! 🚀',
    //     headers: {
    //       authorization: `${GITHUB_UMD_ACCOUNT_FINE_GRAIN_WITH_ALL_PERMISSIONS}`,    
    //       'X-GitHub-Api-Version': '2022-11-28'
    //     }
    // });
    // console.log('RESPONSE ', response);

    console.log('4. Inside async - end! 🎁');
}

console.log('2. Calling async function!! 🎁');
commentOnPullRequest();
