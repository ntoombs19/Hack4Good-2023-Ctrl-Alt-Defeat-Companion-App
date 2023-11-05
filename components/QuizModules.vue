<template>

  <div class="md:flex md:items-center md:justify-between mt-10 ml-9">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ quiz.name }}</h2>
    </div>
  </div>
  <form  @submit.prevent class="mx-5 flex items-center justify-center" action="">
    <div v-for="question in quiz">
      <div v-for="(quest, index) in question">
        <QuestionModule @test-event="testEvent" :quiz-name="index" :question="quest" />
      </div>
    </div>
  </form>

  <div class="mx-5 flex justify-center mt-3">
    <button v-on:click="submitQuiz"> Submit</button>
  </div>

</template>

<script setup>
const props = defineProps(['quiz'])
const emit = defineEmits(['testEvent'])


function submitQuiz(){
  console.log("Submit quiz");

  //true for a correct answer, false for
  let results = []

  for(let i = 0; i < props.quiz.content.length; i++){
    let found = false;
    //if(props.quiz.content[i].question == question){
      for(let ii = 0; ii < props.quiz.content[i].choices.length; ii++){
        if(props.quiz.content[i].choices[ii].chosen){
          if(props.quiz.content[i].choices[ii].isCorrect){
            results.push(true);
            found = true;
          }
        }
      }
      if(!found){
        results.push(false);
      }
    //}
  }

  let questionCount = results.length;
  let correctCount = 0;
  for(let i = 0; i < results.length; i++){
    if(results[i]){
      correctCount++;
    }
  }

  let score = (correctCount/questionCount) * 100;

  console.log(results)
  console.log('Score: ' + score + '%')

  alert('Score: ' + score + '%');
}

function testEvent(content){
  let choice = content[0];
  let question = content[1];

  clearAnswersForQuestion(question);
  chooseAnswersForQuestion(question, choice);
}

function chooseAnswersForQuestion(question, answer){
  console.log(props.quiz.content[0]);
  for(let i = 0; i < props.quiz.content.length; i++){
    if(props.quiz.content[i].question == question){
      for(let ii = 0; ii < props.quiz.content[i].choices.length; ii++){
        if(props.quiz.content[i].choices[ii].content == answer){
          props.quiz.content[i].choices[ii].chosen = true;
        }
      }
    }
  }
}

function clearAnswersForQuestion(question){
  for(let i = 0; i < props.quiz.content.length; i++){
    console.log(props.quiz.content[i].question);
    console.log(question);
    if(props.quiz.content[i].question == question){
      for(let ii = 0; ii < props.quiz.content[i].choices.length; ii++){
        console.log("Making it false");
        props.quiz.content[i].choices[ii].chosen = false;
      }
    }
  }
}


</script>

<style scoped></style>
