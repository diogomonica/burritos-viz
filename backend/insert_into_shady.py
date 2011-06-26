import sqlite3
conn = sqlite3.connect('uber.db')
f = open('shady_hoodz.csv', 'r')
for line in f.readlines():
  args = line.split("|")
  print args
  trip_id= args[0]
  time = args[1]
  lat = args[2]
  lng = args[3]
  origin = args[5]
  destination = args[6].rstrip()
  conn.execute('''insert into shadyness values("%s","%s","%s","%s","%s","%s")''' % (trip_id,time,lat,lng,origin,destination))
conn.commit()
