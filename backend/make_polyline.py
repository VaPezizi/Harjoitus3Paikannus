import json

jsondata = {}
jsondata["Kuortane"] = []
 
with open("position.txt", "r") as file:
    for line in file:

        # lue lat ja lon riviltä
        lat = float(line.split("lat=")[1].split(",")[0])
        lon = float(line.split("lon=")[1].split(",")[0])
        row = [lat, lon]
        jsondata["Kuortane"].append(row)

# parse to JSON
with open("kuortane_db.json", "w") as json_file:
    json.dump(jsondata, json_file, indent=4, ensure_ascii=False)

    