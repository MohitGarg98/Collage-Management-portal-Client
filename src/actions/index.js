export function addAssignmentAct(assignment){
    return {
      type: "ADD_ASSIGNMENT",
      assignment
    }
}
export function submitAssignmentAct(assignment){
    return {
      type: "SUBMIT_ASSIGNMENT",
      assignment
    }
}