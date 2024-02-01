provider "aws" {
  region = "us-east-1" # Set your desired AWS region
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0" # Set the AMI for your region
  instance_type = "t2.micro"
  key_name      = "your-key-pair-name" # Set your EC2 key pair name

  tags = {
    Name = "example-instance"
  }
}

