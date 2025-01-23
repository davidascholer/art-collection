
// Searches all of the data
// e.g. https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers
type SearchQueryType = "q=" & string;

// Highlights are selected works of art from The Met Museum’s permanent collection
// e.g. https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers
type SearchIsHighlightType = "true" | "false";

// Searches against the title field for objects
type SearchTitleType = "true" | "false";

// Searches against the tags field for objects
type SearchTagsType = "true" | "false";

// Returns objects that are a part of a specific department
// e.g. https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat
type SearchDepartmentIdType = `${number}`;

// On view in the museum.
// e.g. https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=sunflower
type SearchIsOnViewType = "true" | "false";

// Searches against the artist name or culture field for objects
type SearchArtistOrCultureType = string;


//e.g. search?medium=Quilts|Silk|Bedcovers&q=quilt
type SearchMetediumType = string;

type SearchHasImagesType = "true" | "false";

// Selection from list returns from "https://collectionapi.metmuseum.org/public/collection/v1/departments""
type SearchGeoLocationType = string;

//
// e.g. https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1700&dateEnd=1800
type SearchYearBeginType = number;

type SearchYearEndType = number;


// type SortType = {
//   titleAZ: "Title";
//   titleZA: "TitleDesc";
//   dateNewestToOldest: "DateDesc";
//   dateOldestToNewist: "Date";
//   artistAZ: "ArtistMaker";
//   artistZA: "ArtistMakerDesc";
//   recordNumber0to9: "AccessionNumber";
//   recordNumber9To0: "AccessionNumberDesc";
// };

export type SearchRequestType = SearchQueryType & (SearchIsHighlightType | SearchTitleType | SearchTagsType | SearchDepartmentIdType | SearchIsOnViewType | SearchArtistOrCultureType | SearchMetediumType | SearchHasImagesType | SearchGeoLocationType | SearchYearBeginType | SearchYearEndType); ;


// Get floor from response.GalleryNumber where onDisplay=true
// e.g. response from https://collectionapi.metmuseum.org/public/collection/v1/objects/{objectID}
/*
{
  "objectID": 436522,
  "isHighlight": false,
  "accessionNumber": "22.60.53",
  "accessionYear": "1922",
  "isPublicDomain": true,
  "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP-19585-001.jpg",
  "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DP-19585-001.jpg",
  "additionalImages": [
    "https://images.metmuseum.org/CRDImages/ep/original/LC-22_60_53-XRAY.jpg",
    "https://images.metmuseum.org/CRDImages/ep/original/LC-22_60_53-IRR.jpg"
  ],
  "constituents": [
    {
      "constituentID": 165215,
      "role": "Artist",
      "name": "Circle of Hugo van der Goes",
      "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500007457",
      "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q215251",
      "gender": ""
    }
  ],
  "department": "European Paintings",
  "objectName": "Painting",
  "title": "A Benedictine Monk",
  "culture": "",
  "period": "",
  "dynasty": "",
  "reign": "",
  "portfolio": "",
  "artistRole": "Artist",
  "artistPrefix": "Circle of",
  "artistDisplayName": "Hugo van der Goes",
  "artistDisplayBio": "Netherlandish, early 1480s",
  "artistSuffix": "",
  "artistAlphaSort": "Goes, Hugo van der",
  "artistNationality": "Netherlandish",
  "artistBeginDate": "1467",
  "artistEndDate": "1482",
  "artistGender": "",
  "artistWikidata_URL": "https://www.wikidata.org/wiki/Q215251",
  "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500007457",
  "objectDate": "",
  "objectBeginDate": 1480,
  "objectEndDate": 1483,
  "medium": "Oil on wood",
  "dimensions": "Overall 9 7/8 x 7 3/8 in. (25.1 x 18.7 cm), with added strip of 3/4 in. (1.9 cm) at right",
  "measurements": [
    {
      "elementName": "Overall",
      "elementDescription": null,
      "elementMeasurements": {
        "Height": 25.1,
        "Width": 18.7
      }
    },
    {
      "elementName": "Frame",
      "elementDescription": null,
      "elementMeasurements": {
        "Depth": 3.1750064,
        "Height": 35.24257,
        "Width": 26.035051
      }
    }
  ],
  "creditLine": "The Bequest of Michael Dreicer, 1921",
  "geographyType": "",
  "city": "",
  "state": "",
  "county": "",
  "country": "",
  "region": "",
  "subregion": "",
  "locale": "",
  "locus": "",
  "excavation": "",
  "river": "",
  "classification": "Paintings",
  "rightsAndReproduction": "",
  "linkResource": "",
  "metadataDate": "2025-01-10T04:53:42.533Z",
  "repository": "Metropolitan Museum of Art, New York, NY",
  "objectURL": "https://www.metmuseum.org/art/collection/search/436522",
  "tags": [
    {
      "term": "Men",
      "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
      "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
    },
    {
      "term": "Portraits",
      "AAT_URL": "http://vocab.getty.edu/page/aat/300015637",
      "Wikidata_URL": "https://www.wikidata.org/wiki/Q134307"
    },
    {
      "term": "Monks",
      "AAT_URL": "http://vocab.getty.edu/page/aat/300025765",
      "Wikidata_URL": "https://www.wikidata.org/wiki/Q733786"
    }
  ],
  "objectWikidata_URL": "https://www.wikidata.org/wiki/Q19912002",
  "isTimelineWork": true,
  "GalleryNumber": "602"
}
*/

// Create url
// 'https://map-api.prod.livingmap.com/v1/maps/the_met/search?query={galleryNum}&latitude=40.77942100000001&longitude=-73.96347200000002&floor_id=4&limit=20&lang=en-GB'

// Returns object
/*
{
  "object": "list",
  "url": "/v1/maps/the_met/search",
  "data": [
    {
      "id": "32222552cff27a39870d330f1f2ecf5b",
      "uid": 612465565735,
      "object": "map-feature",
      "type": "indoor",
      "is_temporarily_closed": false,
      "label": {
        "icon": null,
        "is_visible": true,
        "name": [
          {
            "lang": "en-GB",
            "text": "602"
          }
        ],
        "reference": [
          {
            "lang": "en-GB",
            "text": null
          }
        ]
      },
      "categories": {
        "category": {
          "id": "tourism",
          "name": [
            {
              "lang": "en-GB",
              "text": "tourism"
            }
          ]
        },
        "subcategory": {
          "id": "gallery",
          "name": [
            {
              "lang": "en-GB",
              "text": "gallery"
            }
          ]
        }
      },
      "rank": {
        "value": 3
      },
      "street_address": null,
      "location": {
        "center": {
          "latitude": 40.779304778,
          "longitude": -73.963604222
        },
        "floor": {
          "id": 4,
          "floor": "2.0",
          "name": [
            {
              "lang": "en-GB",
              "text": "Floor 2"
            }
          ],
          "default": false,
          "short_name": "2"
        }
      },
      "information": {
        "description": [
          {
            "lang": "en-GB",
            "text": "Before the fifteenth century, independent portraits were rare in Europe. Those that did appear—usually in sculpture, coinage, or manuscript illumination—most often pictured an idealized royal or holy figure. The proliferation of painted portraits of individuals around the year 1450 aligned with a new emphasis on personal religious belief and self-commemoration, as well as the increased spending power of merchants and bankers—all characteristics of the period historians now term the Renaissance. Artists often designed painted portraits to be portable. These works traveled across Europe as part of diplomatic and personal exchanges, accelerating contact between different artistic traditions.\n\nBoth painters and sculptors looked to portrait types from ancient Greece and Rome to depict their sitters as influential or learned. Others took advantage of the developing medium of oil paint to achieve new effects of realism. Details of wrinkles, scars, or stubble add powerful presence to painted faces, while carefully rendered textiles and jewels record status and wealth for posterity."
          }
        ],
        "long_name": [
          {
            "lang": "en-GB",
            "text": "Faces of the Renaissance"
          }
        ],
        "phone_number": null,
        "summary": [
          {
            "lang": "en-GB",
            "text": "Gallery 602"
          }
        ],
        "links": null,
        "operating_hours": null
      },
      "media": {
        "360": null,
        "popup": {
          "url": "https://cdn.sanity.io/images/cctd4ker/production/e31fc98588063f3683d4ddb7cac28893f84d3afd-720x405.jpg?w=720"
        }
      },
      "transport_api": null,
      "area_highlight": null
    }
  ]
}*/

// create link: https://maps.metmuseum.org/poi?feature={response.data.id}&floor={response.data.location.floor.short_name}&lang=en-GB#18/{response.data.location.center.latitude}/{response.data.location.center.longitude}/-61

//notes
// GB = zoom level
// Generic map page: https://maps.metmuseum.org/poi?floor=1&lang=en-GB#17/40.779448/-73.963517/-61
