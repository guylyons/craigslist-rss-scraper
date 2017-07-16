var request = require("request");
var parseString = require("xml2js").parseString;
var util = require("util");

var url = "https://maine.craigslist.org/search/web?format=rss";

request(url, function(err, res, body) {
  if (!err) {
    var xml = body;

    parseString(xml, function(err, result) {
      var base = result["rdf:RDF"];
      var jobs = base.item;

      console.log("There are currently " + jobs.length + " jobs.");
      //console.log(require("util").inspect(result, false, null));
      for (var i = 0; i < jobs.length; i++) {
        var titles = base.item[i].title;
        var descs = base.item[i].description;
        var links = base.item[i].link;

        console.log("Fetching the details..");
        console.log("-------[ " + i + " ]---------");
        console.log(titles + "\n" + descs + "\n" + links);
        console.log("-------------------");
      }
      console.log("Done!");
    });
  }
});