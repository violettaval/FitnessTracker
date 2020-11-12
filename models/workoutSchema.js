const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: String,
        trim: true,
        required: [true, 'Please provide an exercise type'],
        name: String,
        trim: true,
        required: [true, 'Please provide a name for your activity'],
        duration: Number,
        required: [true, 'Please provide duration of exercise'],
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
      }
    ],
  }, opts);
WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((acc, curr) => {
      return acc + curr.duration;
    }, 0);
});

  const Workout = mongoose.model('Workout', WorkoutSchema);
  module.exports = Workout;