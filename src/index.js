module.exports = function toReadable (number) {
  return number.toString().split('').map((e,i,arr) => {
      if (arr.length === 3) {
          if (i === 0) {
              switch (e) {
                  case '1':
                      e = 'one';
                      break;
                  case '2':
                      e = 'two';
                      break;
                  case '3':
                      e = 'three';
                      break;
                  case '4':
                      e = 'four';
                      break;
                  case '5':
                      e = 'five';
                      break;
                  case '6':
                      e = 'six';
                      break;
                  case '7':
                      e = 'seven';
                      break;
                  case '8':
                      e = 'eight';
                      break;
                  case '9':
                      e = 'nine';
                      break;
              }
              e += ' hundred '
              return e
          }
          if (i === 1 && e !== '0') {
              if (e === '1') {
                  switch (arr[i+1]) {
                      case '0':
                          e = 'ten';
                          break;
                      case '1':
                          e = 'eleven';
                          break;
                      case '2':
                          e = 'twelve';
                          break;
                      case '3':
                          e = 'thirteen';
                          break;
                      case '4':
                          e = 'fourteen';
                          break;
                      case '5':
                          e = 'fifteen';
                          break;
                      case '6':
                          e = 'sixteen';
                          break;
                      case '7':
                          e = 'seventeen';
                          break;
                      case '8':
                          e = 'eighteen';
                          break;
                      case '9':
                          e = 'nineteen';
                          break;
                  }
                  return e
              } else {
                  switch (e) {
                      case '2':
                          e = 'twenty ';
                          break;
                      case '3':
                          e = 'thirty ';
                          break;
                      case '4':
                          e = 'forty ';
                          break;
                      case '5':
                          e = 'fifty ';
                          break;
                      case '6':
                          e = 'sixty ';
                          break;
                      case '7':
                          e = 'seventy ';
                          break;
                      case '8':
                          e = 'eighty ';
                          break;
                      case '9':
                          e = 'ninety ';
                          break;
                  }
                  return e
              }

          }
          if (i === 2 && arr[i-1] !== '1') {
              switch (e) {
                  case '0':
                      e = '';
                      break;
                  case '1':
                      e = 'one';
                      break;
                  case '2':
                      e = 'two';
                      break;
                  case '3':
                      e = 'three';
                      break;
                  case '4':
                      e = 'four';
                      break;
                  case '5':
                      e = 'five';
                      break;
                  case '6':
                      e = 'six';
                      break;
                  case '7':
                      e = 'seven';
                      break;
                  case '8':
                      e = 'eight';
                      break;
                  case '9':
                      e = 'nine';
                      break;
              }
              return e
          }
      }
      if (arr.length === 2 ) {
          if(i===0) {
              if (e === '1') {
                  switch (arr[i+1]) {
                      case '0':
                          e = 'ten';
                          break;
                      case '1':
                          e = 'eleven';
                          break;
                      case '2':
                          e = 'twelve';
                          break;
                      case '3':
                          e = 'thirteen';
                          break;
                      case '4':
                          e = 'fourteen';
                          break;
                      case '5':
                          e = 'fifteen';
                          break;
                      case '6':
                          e = 'sixteen';
                          break;
                      case '7':
                          e = 'seventeen';
                          break;
                      case '8':
                          e = 'eighteen';
                          break;
                      case '9':
                          e = 'nineteen';
                          break;
                  }
              } else {
                  switch (e) {
                      case '2':
                          e = 'twenty ';
                          break;
                      case '3':
                          e = 'thirty ';
                          break;
                      case '4':
                          e = 'forty ';
                          break;
                      case '5':
                          e = 'fifty ';
                          break;
                      case '6':
                          e = 'sixty ';
                          break;
                      case '7':
                          e = 'seventy ';
                          break;
                      case '8':
                          e = 'eighty ';
                          break;
                      case '9':
                          e = 'ninety ';
                          break;
                  }
              }
              return e
          } else {
              if (arr[i-1] !== '1') {
                  switch (e) {
                      case '0':
                          e = '';
                          break;
                      case '1':
                          e = 'one';
                          break;
                      case '2':
                          e = 'two';
                          break;
                      case '3':
                          e = 'three';
                          break;
                      case '4':
                          e = 'four';
                          break;
                      case '5':
                          e = 'five';
                          break;
                      case '6':
                          e = 'six';
                          break;
                      case '7':
                          e = 'seven';
                          break;
                      case '8':
                          e = 'eight';
                          break;
                      case '9':
                          e = 'nine';
                          break;
                  }
                  return e
              }
          }
      }
      if (arr.length === 1 ) {
          switch (e) {
              case '0':
                  e = 'zero';
                  break;
              case '1':
                  e = 'one';
                  break;
              case '2':
                  e = 'two';
                  break;
              case '3':
                  e = 'three';
                  break;
              case '4':
                  e = 'four';
                  break;
              case '5':
                  e = 'five';
                  break;
              case '6':
                  e = 'six';
                  break;
              case '7':
                  e = 'seven';
                  break;
              case '8':
                  e = 'eight';
                  break;
              case '9':
                  e = 'nine';
                  break;
          }
          return e
      }
  }).join('').trim()
};
