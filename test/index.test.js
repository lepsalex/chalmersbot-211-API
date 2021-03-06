const common = require('../lib/external')

describe('General 2-1-1 Trial API testing', () => {
  const TIMEOUT = 5000 // seems a bit long ...
  const listOfTopicTestMsg = 'List of Topics in English'
  test(listOfTopicTestMsg, () => {
    console.log(listOfTopicTestMsg)
    const expectedTopics = [
      'Community Programs',
      'Family services',
      'Health Care',
      'Disabilities',
      'Mental Health / Addictions',
      'Indigenous Peoples',
      'Employment / Training',
      'Housing',
      'Government / Legal',
      'Older Adults'
    ]
    expect.assertions(1)
    return common.listTopic().then((topic) => {
      expect(topic).toEqual(expectedTopics)
    })
  }, TIMEOUT)
})
