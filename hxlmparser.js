/**
 *
 *
 *
 */
 
function parser(str) {
  var reg = /\[server_local\]([^\[]+)\[/i
  if (!reg.test(str)) return 'not match'
  return (str.replace(reg,function(){
    return arguments[1]
  }))
}

var total = parser($resource.content);
$done({content : total});
