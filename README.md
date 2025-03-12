# react_code

```
    const onSave = (user) => {
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    };
```

````
import React from 'react';


function SearchOrg() {
    return (
    <div>

<h2 className="header">Organization Search</h2>

  <button onclick="myFunction()">Upload</button>
      <script>
      function myFunction() {
          alert("Your file is being uploaded!")
      }
      </script>

    </div>







    );
}

  export default SearchOrg;
```
