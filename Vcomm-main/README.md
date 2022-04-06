# Vcomm
OWS safety event
Procedure:
- OWS: Buffer 10m to the left (OWS_b)
- Ride: Buffer 10m to the left (Ride_b)
- Find the intersections between two layers (OWS_b -> Ride_b)
- Check which polygons are less than 50% than the original (OWS_b) -> Output

Intersection safety event (Dangerous approach)
Procedure:
- If the speed in the intersection is above certain value -> Output
- Buffer intersections (10m-20m)
- Calculate the average speed 5-10 sec before intersection (a)
- Calculate the average speed in the interesection (b)
- Calculate the ratio between (a) & (b)
- If the ratio is above the threshold -> Output
