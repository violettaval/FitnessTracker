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
        type: {
          type: String,
          trim: true,
          required: 'Please provide an exercise type'
        },
        name: {
          type: String,
          trim: true,
          required: 'Please provide a name for your activity'
        },
        duration: {
          type: Number,
          required: 'Please provide duration of exercise'
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
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
