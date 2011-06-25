import sqlite3
conn = sqlite3.connect('plane_info.db')
conn.execute('''insert into category values('%s','%s')''' % )
conn.commit()
