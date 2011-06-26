import sqlite3
conn = sqlite3.connect('uber.db')
f = open('/Users/ian/infer_sci/burritos-viz/infochimps_uber-anonymized-gps-logs/uber_gps_tsv/all.tsv', 'r')
for line in f.readlines():
  args = line.split("\t")
  trip_id = args[0]
  time = args[1]
  lat = args[2]
  lng = args[3].rstrip()
  conn.execute('''insert into uber values('%s','%s','%s','%s')''' % (trip_id,time,lat,lng))
conn.commit()
