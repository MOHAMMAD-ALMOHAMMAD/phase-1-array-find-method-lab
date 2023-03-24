function superbowlWin (arr)
{
  const foundElement=arr.find(callBack)
  return foundElement===undefined?foundElement:foundElement.year
}

function callBack(element)
{
  return element.result==="W"
}