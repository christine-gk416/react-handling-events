import React from 'react'

function UserMessage(props) {
  return (
    <div>
          {props.isLoggedIn ? (
              <div>
                  <ol>
                      <li>
                        Confirm your email
                      </li>
                      <li>
                        Complete your profile
                      </li>
                      <li>
                        Subscribe to the newsletter
                      </li>
                  </ol>
              </div>
          ) : (<p>Please sign in</p>)}
    </div>
  )
}

export default UserMessage