import sqlite3
conn = sqlite3.connect('plane_info.db')
f = open('airport_locations.tsv', 'r')
for line in f.readlines():
  args = line.split("\t")
  print args
  code= args[0]
  lat = args[1]
  lng = args[2]
  name = args[3]
  city = args[4]
  country = args[5]
  conn.execute('''insert into airports values('%s','%s','%s','%s','%s','%s')''' % (code,lat,lng,name,city,country))
conn.commit()
