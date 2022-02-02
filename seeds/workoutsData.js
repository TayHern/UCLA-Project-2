const { Workout } = require('./workout');

const workoutData = [
    {
        workout_name: 'Workout 1',
        description: '8 x 50 — start each one easy and build each to fast effort while maintaining good form. Rest 20-30 seconds between each. 8 x 25 — fast/hard while maintaining good form. Rest as much as you need to catch your breath. 4 x 200 negative split — first 100 is easy to moderate and the second 100 is moderate hard to hard. Rest 20 seconds to 1 minute between each.',
        duration: '01:00:00',
        difficulty: '1'
    },
    {
        workout_name: 'Workout 2',
        description: '8 x 25 yards flutter kick with board with 15 seconds rest, 4 x 50 yards alternate laps of freestyle (odds) and backstroke (evens) with 20 seconds rest, 8 x 25 yards alternate sprint kicks (odds) and easy kicks (evens) with 10 seconds rest in between laps, 60 seconds rest, 8 x 25 yards backstroke with 15 seconds rest in between laps, 4 x 50 yards backstroke with 20 seconds rest in between laps, 8 x 25 yards alternating sprint freestyle (odds) and easy backstroke (evens) with 10 seconds rest in between laps',
        duration: '01:00:00',
        difficulty: '1'
    },
    {
        workout_name: 'Workout 3',
        description: '4 x 25 yards freestyle with 15 seconds rest in between laps, 8 x 50 yards fast kick with 20 seconds rest in between laps, 4 x 25 yards freestyle with 15 seconds rest in between laps, 1 min rest, 4 x 25 yards freestyle with 15 seconds rest in between laps, 6 x 100 yards alternating easy freestyle (odds) and hard freestyle (evens) with 30 seconds rest, 4 x 25 yards freestyle with 15 seconds rest',
        duration: '01:00:00',
        difficulty: '1'
    },
    {
        workout_name: 'Workout 4',
        description: '6 x 50 yards flutter kick on board with 20 seconds rest in between laps, 3 x 100 yards alternating freestyle (odds) and backstroke (evens) with 30 seconds rest in between laps, 6 x 50 yards alternating sprint kick (odds) and easy kick (odds) with 15 seconds rest in between laps, 1 min rest, 6 x 50 yards freestyle with 20 seconds rest in between laps, 3 x 100 yards freestyle with 30 seconds rest in between laps, 6 x 50 yards alternating sprint freestyle (odds) and easy backstroke (evens) with 15 seconds rest in between laps',
        duration: '01:00:00',
        difficulty: '1'
    },
    {
        workout_name: 'Workout 5',
        description: 'Warm up with 200 yards freestyle, 150 yards pull with a pull buoy, then 100 yards kick with board. 2 x 500 yards freestyle (broken up per below) with 30 seconds rest, 25 yards easy; 25 yards build, 50 yards easy; 50 yards build, 75 yards easy; 75 yards build, 100 yards easy; 100 yards build, 1 min rest, 2 x 200 yards kicking with board (broken up per below) with 30 seconds rest, 25 yards easy; 25 yards fast, 50 yards easy; 50 yards fast, 25 yards easy; 25 yards fast, Cool down with 200 yards easy freestyle.',
        duration: '01:30:00',
        difficulty: '2'
    },
    {
        workout_name: 'Workout 6',
        description: 'Warm up with 2 minutes easy freestyle, then 4 x 25 yards alternating easy swim and sprint swim. 150 yards freestyle at medium pace45 seconds rest, 4 x 25 yards freestyle at hard pace with 25 seconds rest in between laps,100 yards alternate freestyle and backstroke at medium pace, 45 seconds rest, 4 x 25 yards kicking hard with 30 seconds rest in between laps, 100 yards freestyle easy with pull buoy, 45 seconds rest, 4 x 25 yards freestyle hard with pull buoy with 35 seconds rest in between laps, 100 yards alternate freestyle and breaststroke easy, 45 seconds rest, 2 x 25 yards freestyle hard with 40 seconds rest in between laps, 2 x 25 yards breaststroke hard with 50 seconds rest in between laps, 100 yards any stroke easy, 1 min rest, 75 yards walking lunges in pool, with weights starting at your side and lifting up to shoulder height for a forward raise and lateral raise (alternating) at the top of each lunge, 30 seconds rest, 40 seconds high knees in place, 30 seconds rest, 75 yards walk backward and use aqua weights for shoulder press (straight overhead, palms face each other), 45 seconds squat with biceps curl, 30 second rest, 45 seconds squat with tricep extension, 30 second rest, 45 second squat with rows, 30 second rest, 40 seconds high knees in place, 0 second rest, Repeat from the lunges for 3 rounds',
        duration: '01:30:00',
        difficulty: '2'
    },
    {
        workout_name: 'Workout 7',
        description: 'Warm up with 300 yards freestyle swim, 200 yards pull with buoy, 100 yards kick with board., 4 x 50 yards freestyle with 10 seconds rest in between laps, 4 x 100 yards counting your strokes per length with 20 seconds rest in between laps (aim to take one fewer stroke each round), 4 x 50 yards kick with board with 15 seconds rest in between laps, 8 x 50 yards alternating sprint freestyle (odds) and sprint stroke count (evens) with 10 seconds rest in between laps, Cool down with 200 yards freestyle easy.',
        duration: '01:30:00',
        difficulty: '2'
    },
    {
        workout_name: 'Workout 8',
        description: 'Warm up with 300 yards freestyle swim, 200 yards pull with buoy, and 100 yards kick with board. 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps, 25 yards easy; 25 yards fast, 50 yards easy; 50 yards fast, 75 yards easy; 75 yards fast, 2 x 200 yards breaststroke (broken up per below) with 30 seconds rest in between laps, 25 yards easy; 25 yards fast, 50 yards easy; 50 yards fast, 25 yards easy; 25 yards fast, 1 x 100 yards first half fast freestyle; second half fast breaststroke with 20 seconds rest after, 2 x 200 yards breaststroke (broken up per below) with 30 seconds rest in between laps, 25 yards easy; 25 yards fast, 50 yards easy; 50 yards fast, 25 yards easy; 25 yards fast, 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps, 25 yards easy; 25 yards fast, 50 yards easy; 50 yards fast, 75 yards easy; 75 yards fast; Cool down with 200 yards easy swimming.',
        duration: '01:30:00',
        difficulty: '2'
    },
    {
        workout_name: 'Workout 9',
        description: 'Warm up with 2 minutes easy freestyle, then 4 x 25 yards alternating easy swim and sprint swim. 200 yards freestyle at medium pace, 40 seconds rest, 6 x 25 yards freestyle at hard pace with 25 seconds rest in between laps, 150 yards alternate freestyle and backstroke at a medium pace, 40 seconds rest, 4 x 25 yards kicking hard with 30 seconds rest in between laps, 200 yards freestyle medium with pull buoy, 40 seconds rest, 4 x 25 yards freestyle hard with pull buoy with 30 seconds rest in between laps, 150 yards alternate freestyle and breaststroke medium, 40 seconds rest, 2 x 25 yards butterfly hard with 50 seconds rest in between laps, 2 x 25 yards backstroke hard with 40 seconds rest in between laps, 2 x 25 yards breaststroke hard with 45 seconds rest in between laps, 100 yards alternate breaststroke and backstroke easy, 1 min rest, 100 yards walking lunges in pool, with weights starting at your side and lifting up to shoulder height for a forward raise and lateral raise (alternating) at the top of each lunge (begin with foam weights, and move up in one pound increments as you get stronger), 20 seconds rest, 60 seconds high knees in place, 20 seconds rest, 100 yards walk backward and use aqua weights for shoulder press (straight overhead, palms face each other), 0 seconds squat with biceps curl, 20 second rest, 60 seconds squat with tricep extension, 20 second rest, 60 second squat with rows, 20 second rest, 60 seconds high knees in place, 60 second rest, Repeat from the lunges for 3–4 rounds.',
        duration: '01:30:00',
        difficulty: '3'
    },
    {
        workout_name: 'Workout 10',
        description: '4 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps, 3 x 75 yards freestyle (70 percent HRM) with 30 seconds rest in between laps, 3 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps, 3 x 75 yards freestyle (70 percent HRM) with 30 seconds rest in between laps, 2 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps',
        duration: '01:00:00',
        difficulty: '3'
    },
    {
        workout_name: 'Workout 11',
        description: 'Warm up with 4 x 100 yards freestyle swim, 4 x 50 yards pull with buoy, 8 x 25 yards kick with board. 10 x 50 yards alternating flutter kick with board (odds) and breaststroke kick with board (evens) with 20 seconds rest in between laps, 1 min rest, 2 x 25 yards fast freestyle with 5 seconds rest, 2 x 50 yards fast freestyle with 10 seconds rest, 2 x 25 yards fast freestyle with 5 seconds rest, Repeat 3 times, Cool down with 200 meters freestyle easy.',
        duration: '01:0:00',
        difficulty: '3'
    },
    {
        workout_name: 'Keifer Swim Workout',
        description: 'Warm Up: 100 swim, 100 pull, 100 kick, 100 swim, 400 yards, 400 cumulative yards, 16 x 25’s @ :10 rest all dolphin kick with a board hands resting on top of the bottom of the board not holding it, head down in the water, long arms. Lift your head to breathe every 5 kicks or more, 400 yards, 800 cumulative yards, 6 x 50’s @ :10 rest butterfly drill, 2- Right arm only down, left arm only back, 2- Doubles (2 right arm, 2 left arm, 2 full strokes), 2 – freestyle recover, 200 freestyle pull, 500 yards, 1300 cumulative yards. Main Set: 6 x 75’s @ :20 rest, 2x; 1- 25 underwater dolphin kick, 25 butterfly swim, 25 recover easy free, 2- 25 recover, 25 underwater dolphin kick, 25 butterfly swim, 3 – 25 butterfly swim, 25 recover, 25 underwater dolphin kick, 450 yards, 1750 cumulative yards, 8 x 50’s freestyle pull @ :10 rest, Moderate heart rate 140-150, 200 easy no gear choice, 600 yards, 2350 cumulative yards, 8 x 25’s @:15 rest. Treat the fast 25’s as a broken 100 fly, add up your times when you are done. Odds sprint butterfly, Even easy recover choice, 200 yards, 2550 cumulative yards, 100 easy pull, 100 scull choice, 200 yards, 2750 cumulative yards',
        duration: '01:00:00',
        difficulty: '3'
    },
];

const workouts = () => Workout.bulkCreate(workoutData);

module.exports = workouts;