// src/utils/xmlParser.ts
import xml2js from 'xml2js';
import { ParsedXMLData } from '../types/xmlData'; // Import the types

export const parseXML = (xmlData: string): Promise<ParsedXMLData> => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) {
        reject(new Error('Invalid XML'));
      } else {
        resolve(result as ParsedXMLData);  // Cast the result to ParsedXMLData
      }
    });
  });
};
