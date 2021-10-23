//
// ACF Blocks
//

const acfCardList = `... on WordPress_AcfCardListBlock {
    name
    attributes {
      className
    }
    cardList {
      bgColor
      title
      buttons {
        text
        link {
          title
          url
          target
        }
      }
      cardRatio
      cards {
        title
        text
        img {
          sourceUrl
          sourceUrlSharp {
            childImageSharp {
              fluid {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
          }
        }
        link {
          title
          url
          target
        }
      }
    }
  }
`

const acfCoverContent = `... on WordPress_AcfCoverContentBlock {
    attributes {
      className
    }
    coverContent {
      img {
        sourceUrl
        sourceUrlSharp {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
      imgOverlay
      title
      text
      buttons {
        text
        link {
          target
          url
        }
      }
    }
  }
`

const acfCoverMain = `... on WordPress_AcfCoverMainBlock {
    attributes {
      className
    }
    coverMain {
      img {
        sourceUrl
        sourceUrlSharp {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
      imgOverlay
      label
      title
      text
      buttons {
        text
        link {
          target
          url
        }
      }
    }
  }
`

const acfDownload = `...on WordPress_AcfDownloadBlock {
    name
    attributes {
      className
    }
    download {
      bgImg {
        sourceUrl
        sourceUrlSharp {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
      bgImgOverlay
      title
      text
      img {
        title
        altText
        sourceUrl
        sourceUrlSharp {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
      buttons {
        img {
          title
          altText
          sourceUrl
          sourceUrlSharp {
            childImageSharp {
              fluid {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
          }
        }
        link {
          target
          url
        }
      }
    }
  }
`

const acfGallery = `... on WordPress_AcfGalleryBlock {
    name
    attributes {
      className
    }
    gallery {
      bgColor
      gallery {
        sourceUrl
        sourceUrlSharp {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
        title
      }
    }
  }
`

const acfHeader = `... on WordPress_AcfHeaderBlock {
  attributes {
    className
  }
  header {
    title
  }
}
`

const acfHeadline = `... on WordPress_AcfHeadlineBlock {
    attributes {
      className
    }
    headline {
      bgColor
      title
      text
      buttons {
        text
        link {
          url
        }
      }
    }
  }
`

const acfIconWTextList = `... on WordPress_AcfIconWTextListBlock {
    attributes {
      className
    }
    iconWTextList {
      bgColor
      title
      text
      list {
        icon {
          title
          altText
          sourceUrl
        }
        text
        title
      }
    }
  }
`

const acfImage = `... on WordPress_AcfImageBlock {
    attributes {
      className
    }
    image {
      image {
        altText
        title
        sourceUrl
        sourceUrlSharp {
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  }
`

const acfLabelWValueList = `... on WordPress_AcfLabelWValueListBlock {
    attributes {
      className
    }
    labelWValueList {
      bgColor
      title
      text
      list {
        label
        value
      }
    }
  }
`

const acfTextWCard = `...on WordPress_AcfTextWCardBlock {
    attributes {
      className
    }
    textWCard {
      colOrder
      bgColor
      title
      text
      buttons {
        text
        link {
          target
          title
          url
        }
      }
      card {
        cardRatio
        img {
          sourceUrl
          sourceUrlSharp {
            childImageSharp {
              fluid {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
          }
        }
        link {
          target
          title
          url
        }
      }
    }
  }
`

//
// Core Blocks
//

const coreGroup = `
  ... on WordPress_CoreGroupBlock {
    attributes {
      ... on WordPress_CoreGroupBlockAttributes {
        align
        anchor
        className
      }
    }
    innerBlocks {
      name
      ... on WordPress_AcfImageBlock {
        attributes {
          className
        }
        image {
          image {
            altText
            title
            sourceUrl
            sourceUrlSharp {
              childImageSharp {
                fluid {
                  base64
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
      ... on WordPress_CoreParagraphBlock {
        name
        attributes {
          ... on WordPress_CoreParagraphBlockAttributes {
            align
            content
            className
          }
        }
      }
      ... on WordPress_CoreHeadingBlock {
        attributes {
          ... on WordPress_CoreHeadingBlockAttributes {
            align
            className
            content
            level
          }
        }
      }
      ... on WordPress_CoreListBlock {
        attributes {
          values
          ordered
          className
        }
      }
    }
  }
`

const coreHeading = ` ... on WordPress_CoreHeadingBlock {
    attributes {
      ... on WordPress_CoreHeadingBlockAttributes {
        align
        className
        content
        level
      }
    }
  }
`

const coreList = `... on WordPress_CoreListBlock {
    attributes {
      values
      ordered
      className
    }
  }
`

const coreParagraph = `... on WordPress_CoreParagraphBlock {
    name
    attributes {
      ... on WordPress_CoreParagraphBlockAttributes {
        align
        content
        className
      }
    }
  }
`

const coreShortcode = `... on WordPress_CoreShortcodeBlock {
    attributes {
      text
    }
  }
`

module.exports = {
  // ACF Blocks
  acfCardList,
  acfCoverMain,
  acfCoverContent,
  acfDownload,
  acfGallery,
  acfHeader,
  acfHeadline,
  acfIconWTextList,
  acfImage,
  acfLabelWValueList,
  acfTextWCard,

  // Core Blocks
  coreGroup,
  coreHeading,
  coreList,
  coreParagraph,
  coreShortcode,
}
