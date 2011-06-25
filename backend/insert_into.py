import sqlite3
conn = sqlite3.connect('plane_info.db')
f = open('flight_data.csv', 'r')
for line in f.readlines():
  args = line.split(',')
  print args
  origin = args[0]
  destination = args[1]
  passengers = args[2]
  flights = args[3]
  month = args[4]
  year = args[5].rstrip()
  conn.execute('''insert into flights values('%s','%s','%s','%s','%s','%s')''' % (origin,destination,passengers,flights,month,year))
conn.commit()
