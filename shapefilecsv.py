import shapefile

def main():
  sf = shapefile.Reader("planning_neighborhoods/planning_neighborhoods")

  ofile = open('hoods.csv', 'w')

  ofile.write('hood')

  

  for shape_id in range(len(sf.shapes())):
    shape = sf.shapes()[shape_id]
    for point in shape.points:
      x, y = point
      line = str(shape_id) + ',' + sf.records()[shape_id][1] + ',' + str(x) + ',' + str(y) + '\n'
      ofile.write(line)
    




if __name__ == "__main__":
  main()