void setup() {
  Serial.begin(9600);
}

void loop() {
  while(!Serial.available());
  analogWrite(5, Serial.read());
}
