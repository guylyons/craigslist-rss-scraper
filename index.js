var request = require("request");
var parseString = require("xml2js").parseString;
var util = require("util");

var state = "maine";
var url = "https://" + state + ".craigslist.org/search/web?format=rss";

request(url, function(err, res, body) {
  if (!err) {
    var xml = body;

    parseString(xml, function(err, result) {
      var base = result["rdf:RDF"];
      var jobs = base.item;

      console.log("There are currently " + jobs.length + " jobs.");

      // use below to inspect the entire response
      //console.log(require("util").inspect(result, false, null));

      for (var i = 0; i < jobs.length; i++) {
        var title = base.item[i].title;
        var description = base.item[i].description;
        var link = base.item[i].link;

        console.log("Fetching the details..");
        console.log("-------[ " + i + " ]---------");
        console.log(title + "\n" + description + "\n" + link);
        console.log("-------------------");
      }

      console.log("Done!");
    });
  }
});
