export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const replaceAll = (str: string, find: string, replace: string, option: any) => {
  // return str.replace(new RegExp(find, 'g'), replace);
  let flags = 'g';
  const { isCaseSentive } = option || {};
  if(!isCaseSentive){
    flags += 'i';
  }
  return str.replace(new RegExp(escapeRegExp(find), flags), replace);
}

const storedMast = {};
export const generateMaskString = (len: number) => {
  let result = '';
  if(storedMast[len] !== undefined){
    return storedMast[len];
  }
  for(let i = 0; i < len; i++){
    result += "X";
  }
  storedMast[len] = result;
  return result;
}

export const getStringsFrequency = (text: string, words: string[], isCaseSentive: boolean) => {
  const result = [];
  words?.forEach(word => {
    if(isCaseSentive){
      result.push({ word, frequency: text?.split(word)?.length -1 });
    }else{
      result.push({ word, frequency: text?.toLowerCase()?.split(word?.toLowerCase())?.length -1 });
    }
  })
  return result;
}