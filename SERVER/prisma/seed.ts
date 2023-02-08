import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efdb'
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000')

const secondHabitId = '0690cfac-d039-4194-9571-01aa2aa0ega'
const secondHabitCreationDate = new Date('2022-12-29T03:00:00.000')

//PAREI EM 30 MINUTOS DE VIDEO
async function run() {
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  // Creat Habit

  await Promise.all([
    prisma.habit.create({
      data:{
        id:firstHabitId,
        title: 'Beber 2 litros de água',
        created_at: firstHabitCreationDate,
        WeekDays:{
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
          ]
        }
      }
    }),

    prisma.habit.create({
      data:{
        id:firstHabitId,
        title: 'Exercitar',
        created_at: secondHabitCreationDate,
        WeekDays:{
          create: [
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
          ]
        }
      }
    }),

    prisma.habit.create({
      data:{
        id:firstHabitId,
        title: 'dormir 8h',
        created_at: firstHabitCreationDate,
        WeekDays:{
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
          ]
        }
      }
    })


  ])

  await Promise.all([
    prisma.day.create({
      data:{
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create:{
            habit_id: firstHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data:{
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create:{
            habit_id: firstHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data:{
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create:[
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })