
import sys
import os
import urllib
import json

API_KEY = 'JKEkyDt3b6leRc0c18mguQ'

def neighborhood(lat, lng):
  hoodurl = "http://api.yelp.com/neighborhood_search?lat=%s&long=%s&ywsid=%s" % (lat, lng, API_KEY)
  # print hoodurl
  hoodresult = json.loads(urllib.urlopen(hoodurl).readlines()[0])
  return hoodresult[u'neighborhoods'][0][u'name']

def main():
  try:
    coords, ofile = open(sys.argv[1], 'r'), open(sys.argv[2], 'w')
  except:
    print 'usage:', sys.argv[0], '[in filename] [out filename]'
    return
  
  for line in coords.readlines()[1:]:
    tripid, startlat, startlong, endlat, endlong, time = line.split(',')
    try:
      starthood, endhood = neighborhood(startlat, startlong), neighborhood(endlat, endlong)
      print starthood, endhood
    except:
      pass
    line = tripid + ',' + starthood + ',' + endhood + ',' + time
    ofile.write(line)

  ofile.close()

if __name__ == '__main__':
  main()




