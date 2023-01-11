```mermaid
classDiagram
    Person --> Person : Relative of
    Person --> Person : Parent of
    Person --> Person : Child of
    Person --> Group : Member of
    Person --> Relationship : Is part of
    Person --> Event : Participate in
    Person --> Event : Related to
    Person --> Presentation : Described in
    Person --> Topic : Related to
    Group --> Event : Participate in
    Group --> Event : Related to
    Group --> Presentation : Described in
    Group --> Location : Visit
    Topic --> Presentation : Describe in
    Topic --> Event : Related to
    Relationship --> Presentation : Described in
    Relationship --> Event : Related to
    Event --> Presentation : Described in
    Event --> Time : Occur on
    Event --> Location : Occur at
    Presentation
    Time --> Presentation : Described in
    Location --> Presentation : Described in
    Object --> Location : Located at
    Object --> Topic : Related to
    Object --> Presentation : Describe in
    Object --> Event : Related to
```