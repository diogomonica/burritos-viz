import sqlite3
conn = sqlite3.connect('uber.db')
f = open('../uber_hood.csv', 'r')
for line in f.readlines():
  args = line.split(",")
  print args
  trip_id= args[0]
  origin = args[1]
  destination = args[2].rstrip()
  conn.execute('''insert into hoods values("%s","%s","%s")''' % (trip_id,origin,destination))
conn.commit()
