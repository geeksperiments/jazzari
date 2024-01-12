var notelength = 1/16

start_time = 0
for (var factor = 0; factor < 1; factor += 0.5) {
  NOTE({time: start_time + factor, row: 62, length: notelength})
  NOTE({time: start_time + factor + 1/16, row: 66, length: notelength})
  NOTE({time: start_time + factor + 2/16, row: 69, length: notelength})
  NOTE({time: start_time + factor + 3/16, row: 66, length: notelength})
  NOTE({time: start_time + factor + 4/16, row: 69, length: notelength})
  NOTE({time: start_time + factor + 5/16, row: 66, length: notelength})
  NOTE({time: start_time + factor + 6/16, row: 62, length: notelength})
  NOTE({time: start_time + factor + 7/16, row: 66, length: notelength})
}

start_time = 1
for (var factor = 0; factor < 1; factor += 0.5) {
  NOTE({time: start_time + factor, row: 61, length: notelength})
  NOTE({time: start_time + factor + 1/16, row: 66, length: notelength})
  NOTE({time: start_time + factor + 2/16, row: 69, length: notelength})
  NOTE({time: start_time + factor + 3/16, row: 66, length: notelength})
  NOTE({time: start_time + factor + 4/16, row: 69, length: notelength})
  NOTE({time: start_time + factor + 5/16, row: 66, length: notelength})
  NOTE({time: start_time + factor + 6/16, row: 61, length: notelength})
  NOTE({time: start_time + factor + 7/16, row: 66, length: notelength})
}

start_time = 2
for (var factor = 0; factor < 1; factor += 0.5) {
  NOTE({time: start_time + factor, row: 59, length: notelength})
  NOTE({time: start_time + factor + 1/16, row: 62, length: notelength})
  NOTE({time: start_time + factor + 2/16, row: 71, length: notelength})
  NOTE({time: start_time + factor + 3/16, row: 62, length: notelength})
  NOTE({time: start_time + factor + 4/16, row: 71, length: notelength})
  NOTE({time: start_time + factor + 5/16, row: 62, length: notelength})
  NOTE({time: start_time + factor + 6/16, row: 59, length: notelength})
  NOTE({time: start_time + factor + 7/16, row: 62, length: notelength})
}

start_time = 3
NOTE({time: start_time , row: 55, length: 1/16})
NOTE({time: start_time + 1/16, row: 62, length: notelength})
NOTE({time: start_time + 2/16, row: 71, length: notelength})
NOTE({time: start_time + 3/16, row: 62, length: notelength})
NOTE({time: start_time + 4/16, row: 71, length: notelength})
NOTE({time: start_time + 5/16, row: 62, length: notelength})
NOTE({time: start_time + 6/16, row: 55, length: notelength})
NOTE({time: start_time + 7/16, row: 62, length: notelength})
NOTE({time: start_time + 8/16, row: 55, length: notelength})
NOTE({time: start_time + 9/16, row: 62, length: notelength})
NOTE({time: start_time + 10/16, row: 67, length: notelength})
NOTE({time: start_time + 11/16, row: 62, length: notelength})
NOTE({time: start_time + 12/16, row: 67, length: notelength})
NOTE({time: start_time + 13/16, row: 62, length: notelength})
NOTE({time: start_time + 14/16, row: 55, length: notelength})
NOTE({time: start_time + 15/16, row: 62, length: notelength})

