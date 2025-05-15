import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      firstname: "Ojas",
      lastname: "Charjan",
      email: "ojascharjan24@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "9529319989",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Shrawani",
      lastname: "Petle",
      email: "Shravanipetle@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "8999529445",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Khushboo",
      lastname: "Bhagat",
      email: "khushboobhagat54@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "7666426143",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Chetan",
      lastname: "Nandurkar",
      email: "chetannandurkar71@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "9172188949",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Sweta",
      lastname: "Karluke",
      email: "swetakarluke204@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "7499174035",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Aachal",
      lastname: "Bhudke",
      email: "bhudkeaachal56@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "8482956489",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Gitu",
      lastname: "Thakre",
      email: "gituthakre7@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "9028985380",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Sampada",
      lastname: "Khond",
      email: "sampadakhond@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "8767996278",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Ritesh",
      lastname: "Gharde",
      email: "gharderitesh2@gmail.com",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "9209269585",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Gunjan",
      lastname: "Patil",
      email: "co.2023.gspatil@bitwardha.ac.in",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "9370125527",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
    {
      firstname: "Vinay",
      lastname: "Patil",
      email: "co.2023.vspatil@bitwardha.ac.in",
      password: await bcrypt.hash("defaultpassword", 10),
      phone: "8698665653",
      address: "Unknown",
      role: "customer",
      lat: 0.0,
      lng: 0.0,
    },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  console.log("Users seeded successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
